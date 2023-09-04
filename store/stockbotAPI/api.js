import axios from "axios";
const stockbotAPI = axios.create({
  baseURL: "https://stockbot-42909.botics.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function api_docs_schema_retrieve(payload) {
  return stockbotAPI.get(`/api-docs/schema/`, {
    params: {
      lang: payload.lang
    }
  });
}

function api_v1_login_create(payload) {
  return stockbotAPI.post(`/api/v1/login/`, payload.data);
}

function api_v1_signup_create(payload) {
  return stockbotAPI.post(`/api/v1/signup/`, payload.data);
}

function modules_two_factor_authentication_2fa_retrieve(payload) {
  return stockbotAPI.get(`/modules/two-factor-authentication/2fa`);
}

function modules_two_factor_authentication_2fa_create(payload) {
  return stockbotAPI.post(`/modules/two-factor-authentication/2fa`);
}

function modules_two_factor_authentication_twofactorauth_list(payload) {
  return stockbotAPI.get(`/modules/two-factor-authentication/twofactorauth/`);
}

function modules_two_factor_authentication_twofactorauth_create(payload) {
  return stockbotAPI.post(`/modules/two-factor-authentication/twofactorauth/`, payload.data);
}

function modules_two_factor_authentication_twofactorauth_retrieve(payload) {
  return stockbotAPI.get(`/modules/two-factor-authentication/twofactorauth/${payload.id}/`);
}

function modules_two_factor_authentication_twofactorauth_update(payload) {
  return stockbotAPI.put(`/modules/two-factor-authentication/twofactorauth/${payload.id}/`, payload.data);
}

function modules_two_factor_authentication_twofactorauth_partial_update(payload) {
  return stockbotAPI.patch(`/modules/two-factor-authentication/twofactorauth/${payload.id}/`, payload.data);
}

function modules_two_factor_authentication_twofactorauth_destroy(payload) {
  return stockbotAPI.delete(`/modules/two-factor-authentication/twofactorauth/${payload.id}/`);
}

function modules_two_factor_authentication_twofactorauth_send_otp_create(payload) {
  return stockbotAPI.post(`/modules/two-factor-authentication/twofactorauth/send_otp/`, payload.data);
}

function modules_two_factor_authentication_verify_destroy(payload) {
  return stockbotAPI.delete(`/modules/two-factor-authentication/verify/${payload.id}/`);
}

function rest_auth_login_create(payload) {
  return stockbotAPI.post(`/rest-auth/login/`, payload.data);
}

function rest_auth_logout_retrieve(payload) {
  return stockbotAPI.get(`/rest-auth/logout/`);
}

function rest_auth_logout_create(payload) {
  return stockbotAPI.post(`/rest-auth/logout/`);
}

function rest_auth_password_change_create(payload) {
  return stockbotAPI.post(`/rest-auth/password/change/`, payload.data);
}

function rest_auth_password_reset_create(payload) {
  return stockbotAPI.post(`/rest-auth/password/reset/`, payload.data);
}

function rest_auth_password_reset_confirm_create(payload) {
  return stockbotAPI.post(`/rest-auth/password/reset/confirm/`, payload.data);
}

function rest_auth_registration_create(payload) {
  return stockbotAPI.post(`/rest-auth/registration/`, payload.data);
}

function rest_auth_registration_verify_email_create(payload) {
  return stockbotAPI.post(`/rest-auth/registration/verify-email/`, payload.data);
}

function rest_auth_user_retrieve(payload) {
  return stockbotAPI.get(`/rest-auth/user/`);
}

function rest_auth_user_update(payload) {
  return stockbotAPI.put(`/rest-auth/user/`, payload.data);
}

function rest_auth_user_partial_update(payload) {
  return stockbotAPI.patch(`/rest-auth/user/`, payload.data);
}

export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_two_factor_authentication_2fa_retrieve,
  modules_two_factor_authentication_2fa_create,
  modules_two_factor_authentication_twofactorauth_list,
  modules_two_factor_authentication_twofactorauth_create,
  modules_two_factor_authentication_twofactorauth_retrieve,
  modules_two_factor_authentication_twofactorauth_update,
  modules_two_factor_authentication_twofactorauth_partial_update,
  modules_two_factor_authentication_twofactorauth_destroy,
  modules_two_factor_authentication_twofactorauth_send_otp_create,
  modules_two_factor_authentication_verify_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
};