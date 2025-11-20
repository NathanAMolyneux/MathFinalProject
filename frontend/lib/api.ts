// API utility for making requests to the Django backend

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

// Get JWT token from localStorage
const getAuthToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("access_token");
  }
  return null;
};

// Set JWT token in localStorage
export const setAuthToken = (token: string | null) => {
  if (typeof window !== "undefined") {
    if (token) {
      localStorage.setItem("access_token", token);
    } else {
      localStorage.removeItem("access_token");
    }
  }
};

// Generic fetch function with auth
const fetchAPI = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<any> => {
  const token = getAuthToken();
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || data.detail || "API request failed");
  }

  return data;
};

// Auth API
export const authAPI = {
  login: async (credentials: { email: string; password: string }) => {
    const data = await fetchAPI("/auth/login/", {
      method: "POST",
      body: JSON.stringify(credentials),
    });
    if (data.access) {
      setAuthToken(data.access);
    }
    return data;
  },

  signup: async (userData: {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    password2: string;
    role?: string;
  }) => {
    const data = await fetchAPI("/auth/signup/", {
      method: "POST",
      body: JSON.stringify(userData),
    });
    if (data.access) {
      setAuthToken(data.access);
    }
    return data;
  },

  forgotPassword: async (emailData: { email: string }) => {
    return fetchAPI("/auth/forgot-password/", {
      method: "POST",
      body: JSON.stringify(emailData),
    });
  },
};

// Tickets API
export const ticketsAPI = {
  getAll: async () => {
    const data = await fetchAPI("/tickets/");
    return data.tickets || data;
  },

  getById: async (id: string) => {
    return fetchAPI(`/tickets/${id}/`);
  },

  create: async (ticketData: {
    title: string;
    description: string;
    category: string;
    priority: string;
    location?: string;
    contactPreference?: string;
  }) => {
    // Map frontend priority (P1-P4) to backend priority
    const priorityMap: Record<string, string> = {
      P1: "critical",
      P2: "high",
      P3: "medium",
      P4: "low",
    };

    const payload = {
      ...ticketData,
      priority: priorityMap[ticketData.priority.toUpperCase()] || ticketData.priority.toLowerCase(),
      contact_preference: ticketData.contactPreference,
    };

    return fetchAPI("/tickets/", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },
};

// Dashboard API
export const dashboardAPI = {
  getSummary: async () => {
    return fetchAPI("/dashboard/summary/");
  },
};

