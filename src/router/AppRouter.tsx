import { Navigate, Route, Routes } from 'react-router-dom';
import {
  CreateSpaceshipPage,
  SearchSpaceshipPage,
  SpaceshipInventoryPage,
} from '../pages';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="create" element={<CreateSpaceshipPage />} />
        <Route path="inventory" element={<SpaceshipInventoryPage />} />
        <Route path="search" element={<SearchSpaceshipPage />} />
        <Route path="*" element={<Navigate to={'create'} />} />
      </Routes>
    </>
  );
};
