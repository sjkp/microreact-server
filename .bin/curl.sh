# token=eyJhbGciOiJIUzUxMiJ9.eyJpZCI6IjYxYTYzMjQ1Y2FlMzEwMDAxMjU3ZWMxMCIsImlhdCI6MTYzODI4Mzg5NiwiZXhwIjoxNzk1OTYzODk2fQ.t7gZgKTW446NL7c2DG0a8DDTq8WQtZYWQj7p6SUBAfFugnNZ4gJ-IoNETJohyjRpqWRNVBAgz2xH3qbzzVcV5A
token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..wzfyzyrzTGirqYml.66NuHH1RSOWanQEBRSrEa6-Rlcf7766QNcd4DY7p9cPsP_0JF_YrDeyww8g8Hy_2w6ev4IWnGC7TaeirPfY9B-H4TqGYsYUJY4N_Ntq_0WFfbTS8T1fRh-bYbO9n5hRMVf1B8zCywUv7DdZYBgwLiw.7uOXxI8maFQxDGFCcUXdHg

curl \
  -X POST \
  --header "Content-type: application/json; charset=UTF-8" \
  --header "Access-Token: $token" \
  --data '{"datasets":{"dataset-1":{"file":"data-file-1","idFieldName":"id"}},"files":{"data-file-1":{"id":"data-file-1","format":"text/csv","name":"data.csv","url":"https://www.dropbox.com/s/hayu110x2c0smcm/data.csv?dl=1"}},"meta":{"name":"-"},"version":1,"schema":"https://microreact.org/schema/v1.json"}' \
  https://microreact.org/api/projects/create

  # http://localhost:8082/api/projects/create

