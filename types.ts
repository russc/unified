export interface IPost {
  resource_type: string;
  id: string;
  title: string;
  description: string;
  author: {
    account_id: number;
    id: number;
    display_name: string;
    profile_pic: {
      resource_type: string;
      id: string;
      kind: string;
      mime_type: string;
      height: number | null;
      width: number | null;
      description: string | null;
      uri: string;
      thumbnail_uri: string | null;
      status: string;
    };
  };
  likes: number;
  child_post_count: number;
  parent_post_id: string | null;
  featured_children: any[];
  featured_profiles: any[];
  action_completors: number;
  action_completors_users: any[];
  liked: boolean;
  is_reported: boolean;
  created_at: string;
  attachments: any[];
}
