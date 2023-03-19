import i18n from "i18n";

import { AppError } from "@handlers/error/AppError";
import { logger } from "@infra/log";

type keys =
  | "PORT"
  | "PASSWORD_HASH_SALT"
  | "SUPPORT_ID"
  | "LIST_ALLOWED_ORIGINS"
  | "JWT_SECRET_KEY"
  | "JWT_SECRET_KEY_REFRESH";

const env = (key: keys, errorMessage = "ErrorEnvVarNotFound"): string => {
  const _env = process.env[key];

  if (!_env) {
    logger.error(`Access attempting to non-existing env var: ${key}`);

    throw new AppError("BAD_REQUEST", i18n.__(errorMessage));
  }

  return _env;
};

export { env };
