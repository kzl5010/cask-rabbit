##Component Hierarchy

**AuthFormContainer**
- AuthForm

**HomeContainer**
- HomeView
- TopNav
- SearchContainer
- SearchBar
- SearchResults

**TaskContainer**
- NewTaskForm
- SelectTaskerForm
- ConfirmTaskForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/signup" | "AuthContainer" |
| "/login" | "AuthContainer" |
| "/" | "HomeContainer" |
| "/profile" | "ProfileContainer" |
| "/profile/edit" | "ProfileEditFormContainer" |
| "/tasks" | "TasksIndexContainer" |
| "/tasks/:id" | "TaskContainer" |
| "/tasks/:id/detail" | "TaskDetailContainer" |
| "/tasks/:id/request" | "TaskRequestFormContainer" |
| "/tasks/:id/:request_id" | "TaskRequestContainer" |
| "/taskers" | "TaskersIndexContainer" |
| "/taskers/:id" | "TaskerContainer"
