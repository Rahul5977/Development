class ApiResponse {
  constructure(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    (this.data = data), (this.message = message), (this.success = true);
  }
}
export { ApiResponse };
