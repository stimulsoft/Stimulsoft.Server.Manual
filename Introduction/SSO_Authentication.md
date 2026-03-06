## SSO Authentication

The SSO (Single Sign-On) technology allows users to securely authenticate across multiple applications using a single set of credentials. After linking one or more supported providers to the Server account, the user can use any of these providers for quick and secure access to their account.


SSO uses the widely adopted OAuth 2.0 protocol, which is supported by most authentication providers. The following providers are currently supported:

* Google

* GitHub

* Facebook

* Microsoft / Azure AD

* Okta


To activate one (or more) of the listed authentication providers, it is sufficient to set the Client ID and Client Secretvalues in the options. These can be obtained from the provider’s own console. This data will be used in requests to the selected provider’s server, which will verify it and, upon successful authorization, return a unique user token. The token will be linked to the Server user account and used for subsequent quick logins to the system.

ASP.NET

File:

C:\ProgramData\Stimulsoft-Server\server.config


Section:

Accounts


Name

Description

AllowOAuthRegistration

Allows new user registration through OAuth authentication.

DefaultUserRoleKey

Default role key assigned to new users during OAuth registration.

GoogleClientId

Google OAuth Client ID for SSO authentication

GoogleClientSecret

Google OAuth Client Secret for SSO authentication.

GitHubClientId

GitHub OAuth Client ID for SSO authentication.

GitHubClientSecret

GitHub OAuth Client Secret for SSO authentication.

FacebookClientId

Facebook OAuth Client ID for SSO authentication.

FacebookClientSecret

Facebook OAuth Client Secret for SSO authentication.

MicrosoftClientId

Microsoft/AzureAD OAuth Client ID for SSO authentication.

MicrosoftClientSecret

Microsoft/AzureAD OAuth Client Secret for SSO authentication.

MicrosoftTenantId

Microsoft/AzureAD Tenant ID for SSO authentication.

OktaClientId

Okta OAuth Client ID for SSO authentication.

OktaClientSecret

Okta OAuth Client Secret for SSO authentication.

OktaDomain

Okta Domain for SSO authentication (e.g., your-domain.okta.com).

Docker

Accounts


Name

Description

Accounts__AllowOAuthRegistration

Allows new user registration through OAuth authentication.

Accounts__DefaultUserRoleKey

Default role key assigned to new users during OAuth registration.

Accounts__GoogleClientId

Google OAuth Client ID for SSO authentication.

Accounts__GoogleClientSecret

Google OAuth Client Secret for SSO authentication.

Accounts__GitHubClientId

GitHub OAuth Client ID for SSO authentication.

Accounts__GitHubClientSecret

GitHub OAuth Client Secret for SSO authentication.

Accounts__FacebookClientId

Facebook OAuth Client ID for SSO authentication.

Accounts__FacebookClientSecret

Facebook OAuth Client Secret for SSO authentication.

Accounts__MicrosoftClientId

Microsoft/AzureAD OAuth Client ID for SSO authentication.

Accounts__MicrosoftClientSecret

Microsoft/AzureAD OAuth Client Secret for SSO authentication.

Accounts__MicrosoftTenantId

Microsoft/AzureAD Tenant ID for SSO authentication.

Accounts__OktaClientId

Okta OAuth Client ID for SSO authentication.

Accounts__OktaClientSecret

Okta OAuth Client Secret for SSO authentication.

Accounts__OktaDomain

Okta Domain for SSO authentication (e.g., your-domain.okta.com).
