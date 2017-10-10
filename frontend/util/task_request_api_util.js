export const createTaskRequest = (task_request) => (
  $.ajax({
    method: "POST",
    url: "/api/task_requests",
    data: {task_request}
  })
);

export const updateTaskRequest = (task_request) => (
  $.ajax({
    method: "PATCH",
    url: `/api/task_requests/${task_request.id}`,
    data: task_request
  })
);

export const fetchTaskRequest = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/task_requests/${id}`
  })
);

export const fetchTaskRequests = () => (
  $.ajax({
    method: "GET",
    url: "/api/task_requests"
  })
);

export const deleteTaskRequest =  (id) => (
  $.ajax({
    method: "DELETE",
    url: `/api/task_requests/${id}`
  })
);
