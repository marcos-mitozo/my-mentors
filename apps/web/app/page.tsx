"use client";

import React from "react";
import { MainContainer } from "@components/MainContainer";
import { ProfileCard } from "@components/ProfileCard";
import { useMentors } from "@hooks/useMentors";
import { paths } from "../../../types/api";
import Image from "next/image";

type Mentor = paths["/user/list/mentors"]["get"]["responses"]["200"]["content"]["application/json"]["results"][0];

function App() {
  const { mentors, loading, error } = useMentors();

  if (loading) return <p>Carregando mentores...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <MainContainer>
      {mentors.map((mentor: Mentor, index: number) => (
        <ProfileCard key={`mentor-${index}`}>
          <Image 
            alt={`mentor-${index}`}
            src={`/assets/mentor-${index+1}.jpg`}
            width={150}
            height={100}
          />
          {mentor.bio}
        </ProfileCard>
      ))}
    </MainContainer>
  );
}

export default App;
