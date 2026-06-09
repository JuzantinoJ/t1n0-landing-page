import { clients } from '../data/clients';
import { projects } from '../data/projects';
import { services } from '../data/services';
import type { Client, Project, Service } from '../types/site';

// This file is the integration boundary for future backend work.
// Replace these static promises with calls to Supabase, Firebase,
// a PostgreSQL API, or a headless CMS without touching UI components.
export const api = {
  async getClients(): Promise<Client[]> {
    return clients;
  },
  async getProjects(): Promise<Project[]> {
    return projects;
  },
  async getServices(): Promise<Service[]> {
    return services;
  }
};
