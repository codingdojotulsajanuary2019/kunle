#pragma checksum "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ORM\LoginRegistration\Views\Home\Success.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "da851ef39aea7d485181f4a7cb056e24cf749d01"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Success), @"mvc.1.0.view", @"/Views/Home/Success.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Home/Success.cshtml", typeof(AspNetCore.Views_Home_Success))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ORM\LoginRegistration\Views\_ViewImports.cshtml"
using LoginRegistration;

#line default
#line hidden
#line 2 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ORM\LoginRegistration\Views\_ViewImports.cshtml"
using LoginRegistration.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"da851ef39aea7d485181f4a7cb056e24cf749d01", @"/Views/Home/Success.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"58b8b69ac1923d039b18bb6580c27c9405e8eb6a", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Success : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<LoginRegistration.Models.User>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(38, 159, true);
            WriteLiteral("\r\n<div class=\"bg-secondary pb-5\">\r\n    <div class=\"navbar navbar-expand-lg bg-dark text-white justify-content-between\">\r\n        <h3 class=\"display-4\">Welcome ");
            EndContext();
            BeginContext(198, 15, false);
#line 5 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ORM\LoginRegistration\Views\Home\Success.cshtml"
                                 Write(Model.FirstName);

#line default
#line hidden
            EndContext();
            BeginContext(213, 66, true);
            WriteLiteral("</h3>   \r\n        <a href=\"/logout\">Logout</a>\r\n    </div>\r\n</div>");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<LoginRegistration.Models.User> Html { get; private set; }
    }
}
#pragma warning restore 1591