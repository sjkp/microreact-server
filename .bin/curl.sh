# token=eyJhbGciOiJIUzUxMiJ9.eyJpZCI6IjYxYTYzMjQ1Y2FlMzEwMDAxMjU3ZWMxMCIsImlhdCI6MTYzODI4Mzg5NiwiZXhwIjoxNzk1OTYzODk2fQ.t7gZgKTW446NL7c2DG0a8DDTq8WQtZYWQj7p6SUBAfFugnNZ4gJ-IoNETJohyjRpqWRNVBAgz2xH3qbzzVcV5A
token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..BIdKDq8Il2OclMsJ.7JmSnIRoPasK8_TaZ0uHgeWEWe8-aEvczYKO1Wj9TWWoa3RYmWmP2fT44EtlYOrLc4LVBwN8dKRRMvKRyKGQkklkttxMEsmijL5UyxEvZ3n6JT8KvHEF875WhW9nHhRCVE2btG8-LAHdQCRN5DIMQg.rVuKGp1764YgUDir9ElXlw
curl \
  -X POST \
  --header "Content-type: application/json; charset=UTF-8" \
  --header "Access-Token: $token" \
  --data '{"datasets":{"dataset-1":{"file":"data-file-1","idFieldName":"id"}},"files":{"data-file-1":{"id":"data-file-1","format":"text/csv","name":"data.csv","url":"https://www.dropbox.com/s/hayu110x2c0smcm/data.csv?dl=1"}},"meta":{"name":"-"},"version":1,"schema":"https://microreact.org/schema/v1.json"}' \
  http://localhost:8082/api/projects/create
  # https://microreact.org/api/projects/create

