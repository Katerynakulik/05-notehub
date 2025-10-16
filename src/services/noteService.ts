import axios from "axios";
import type { AxiosResponse } from "axios";
import type { Note } from "../types/note";

const api = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
    "Content-Type": "application/json",
  },
});

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export async function fetchNotes(params: {
  page?: number;
  perPage?: number;
  search?: string;
}): Promise<FetchNotesResponse> {
  const { page = 1, perPage = 12, search = "" } = params;
  const response: AxiosResponse<FetchNotesResponse> = await api.get("/notes", {
    params: {
      page,
      perPage,
      search: typeof search === "string" ? search : "",
    },
  });

  return response.data;
}
export const createNote = async (data: Note): Promise<Note> => {
  const res = await api.post<Note>("/notes", data);
  return res.data;
};
export async function deleteNote(id: string): Promise<Note> {
  const response: AxiosResponse<Note> = await api.delete(`/notes/${id}`);
  return response.data;
}
