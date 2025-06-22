export const UserRoleEnum = {
  ADMIN: "admin",
  PROJECT_ADMIN: "project_admin",
  MEMBER: "menber",
};
export const AvailableUserRoles = Object.values(UserRoleEnum);

export const TaskStatusEnum = {
  TODO: "todo",
  IN_PROGRESS: "int_progress",
  DONE: "done",
};
export const AvailableTaskStatuses = Object.values(TaskStatusEnum);
