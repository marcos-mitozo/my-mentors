import { useState, useEffect } from "react";
import { paths } from "../../../types/api";

type Mentor = paths["/user/list/mentors"]["get"]["responses"]["200"]["content"]["application/json"]["results"];

export function useMentors() {
  const [mentors, setMentors] = useState<Mentor>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMentors() {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:8080/user/list/mentors");
        if (!res.ok) throw new Error("Erro ao carregar mentores");
        const data = await res.json();
        setMentors(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMentors();
  }, []);

  return { mentors, loading, error };
}
