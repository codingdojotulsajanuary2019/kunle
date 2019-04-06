// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using IdentityLogin;
// using IdentityLogin.Controllers;

// namespace Microsoft.AspNetCore.Mvc
// {
//     public static class UrlHelperExtensions
//     {
//         public static string EmailConfirmationLink(this IUrlHelper urlHelper, string userId, string code, string scheme)
//         {
//             return urlHelper.Action(
//                 action: nameof(HomeController.ConfirmEmail),
//                 controller: "Home",
//                 values: new { userId, code },
//                 protocol: scheme);
//         }

//         // public static string ResetPasswordCallbackLink(this IUrlHelper urlHelper, string userId, string code, string scheme)
//         // {
//         //     return urlHelper.Action(
//         //         action: nameof(HomeController.ResetPassword),
//         //         controller: "Account",
//         //         values: new { userId, code },
//         //         protocol: scheme);
//         // }
//     }
// }