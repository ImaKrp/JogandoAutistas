import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Memory } from "../pages/Games/Memory";
import { GamesLayout } from "../gamesLayout";

export const PrivateRoutes = () => {
  return (
    <GamesLayout>
      <Routes>
        <Route exact path="/memory" element={<Memory />} />
        <Route path="*" element={<Navigate to="/memory" replace />} />
      </Routes>
    </GamesLayout>
  );
};
