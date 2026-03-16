// packages/shared-services/src/types/database.ts
export interface Profile {
  id: string;
  user_type: 'customer' | 'porter';
  first_name: string;
  last_name: string;
  phone?: string;
  avatar_url?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ServiceRequest {
  id: string;
  customer_id: string;
  porter_id?: string;
  pickup_address: string;
  pickup_latitude: number;
  pickup_longitude: number;
  dropoff_address: string;
  dropoff_latitude: number;
  dropoff_longitude: number;
  status: 'pending' | 'matched' | 'accepted' | 'picked_up' | 'completed' | 'cancelled';
  estimated_price?: number;
  final_price?: number;
  created_at: string;
  updated_at: string;
}

export interface PorterLocation {
  id: string;
  porter_id: string;
  latitude: number;
  longitude: number;
  heading?: number;
  is_online: boolean;
  updated_at: string;
}