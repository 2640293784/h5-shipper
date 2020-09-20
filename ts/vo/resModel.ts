
class BaseModel {
    private data: object | string;
    private message: string;
    constructor(data?: object | string, message?: string) {
      if (typeof data === 'string') {
        this.message = data;
        data = null;
        message = null;
      }
  
      if (data) {
        this.data = data;
      }
      if (message) {
        this.message = message;
      }
    }
  }
  
  class SuccessModel extends BaseModel {
    private errno: number;
    constructor(data?: object | string, message?: string) {
      super(data, message);
      this.errno = 0;
    }
  }
  
  class ErrorModel extends BaseModel {
    private errno: number;
    constructor(data?: object | string, message?: string) {
      super(data, message);
      this.errno = -1;
    }
  }
  
  export { SuccessModel, ErrorModel };