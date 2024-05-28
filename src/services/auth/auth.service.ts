import type {
  IAuthService,
  TLoginRequest,
  TLoginResponse,
} from "../../services/auth/auth.service.types";
import { BaseService } from "../../services/base/base.service";
import { Logger } from "../../util/logger/logger";

class AuthService extends BaseService implements IAuthService {
  private logger: Logger = new Logger(AuthService.name);

  private LOGIN_URL: string = "/login";

  constructor() {
    super();
  }

  async login(request: TLoginRequest): Promise<TLoginResponse | undefined> {
    const methodName: string = this.login.name;
    this.logger.info("Calling login API", {
      methodName,
      request,
    });
    try {
      const response: TLoginResponse = await this.post(this.LOGIN_URL, request);
      this.logger.info("Received response from login API", {
        methodName,
        request,
        response,
      });
      return response;
    } catch (error) {
      this.logger.error("Encountered an error during login API", {
        methodName,
        request,
        error,
      });
    }
  }
}

export default AuthService;
