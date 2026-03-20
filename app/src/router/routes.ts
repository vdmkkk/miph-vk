import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import UserPage from "../pages/UserPage";
import ProfilePage from "../pages/ProfilePage";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ChatsLayout from "../layouts/ChatsLayout";
import ChatsPage from "../pages/ChatsPage";
import ChatPage from "../pages/ChatPage";

const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      children: [
        {path: '', Component: HomePage},
        {path: 'user/:userId', Component: UserPage},
        {path: 'profile', Component: ProfilePage},
      ]
    },
    {
      path: '/auth',
      Component: AuthLayout,
      children: [
        {path: 'login', Component: LoginPage},
        {path: 'register', Component: RegisterPage},
      ]
    },
    {
      path: '/chats',
      Component: ChatsLayout,
      children: [
        {path: '', Component: ChatsPage},
        {path: ':chatId', Component: ChatPage},
      ]
    }
  ]);

export default router;