export const createTaskRequest = (taskRequest) => (
  $.ajax({
    method: "POST",
    url: "/api/task_requests",
    data: taskRequest
  })
)

export const updateTaskRequest = (taskRequest) => (
  $.ajax({
    method: "PATCH",
    url: `/api/task_requests/${taskRequest.id}`,
    data: taskRequest
  })
)

export const fetchTaskRequest = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/task_requests/${id}`
  })
)

export const fetchTaskRequests = () => (
  $.ajax({
    method: "GET",
    url: "/api/task_requests"
  })
)

export const deleteTaskRequest =  (id) => (
  $.ajax({
    method: "DELETE",
    url: `/api/task_requests/${id}`
  })
)
