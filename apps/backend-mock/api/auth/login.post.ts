import { defineEventHandler, readBody, setResponseStatus } from 'h3';
import {
  clearRefreshTokenCookie,
  setRefreshTokenCookie,
} from '~/utils/cookie-utils';
import { generateAccessToken, generateRefreshToken } from '~/utils/jwt-utils';
import { MOCK_USERS } from '~/utils/mock-data';
import {
  forbiddenResponse,
  useResponseError,
  useResponseSuccess,
} from '~/utils/response';

export default defineEventHandler(async (event) => {
  const { password, phone } = await readBody(event);
  if (!password || !phone) {
    setResponseStatus(event, 400);
    return useResponseError(
      'BadRequestException',
      'Phone and password are required',
    );
  }

  const findUser = MOCK_USERS.find(
    (item) => item.phone === phone && item.password === password,
  );

  if (!findUser) {
    clearRefreshTokenCookie(event);
    return forbiddenResponse(event, 'Phone or password is incorrect.');
  }

  const accessToken = generateAccessToken(findUser);
  const refreshToken = generateRefreshToken(findUser);

  setRefreshTokenCookie(event, refreshToken);

  return useResponseSuccess({
    ...findUser,
    accessToken,
  });
});
