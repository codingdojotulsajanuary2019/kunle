#pragma checksum "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ASP_MVC\Dojodachi\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "53dfc89add78f34f82004adf33268f4762a849ce"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Home/Index.cshtml", typeof(AspNetCore.Views_Home_Index))]
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
#line 1 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ASP_MVC\Dojodachi\Views\_ViewImports.cshtml"
using Dojodachi;

#line default
#line hidden
#line 2 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ASP_MVC\Dojodachi\Views\_ViewImports.cshtml"
using Dojodachi.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"53dfc89add78f34f82004adf33268f4762a849ce", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"9f823666e3659d58cebeb316cce4284db07d26c9", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Dojodachi.Models.MyModel>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/images/dachii.jpg"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("height", new global::Microsoft.AspNetCore.Html.HtmlString("250"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("width", new global::Microsoft.AspNetCore.Html.HtmlString("240"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("alt", new global::Microsoft.AspNetCore.Html.HtmlString("dachi"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("offset-3 mb-4 mt-2"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(33, 186, true);
            WriteLiteral("<div class=\"container col-8 bg-light mt-3 p-0\">\r\n    <div class=\"navbar navbar-expand-lg col-12 m-0 text-white bg-dark\">\r\n        <ul class=\"nav\">\r\n            <li class=\"mr-5\">Fullness ");
            EndContext();
            BeginContext(220, 14, false);
#line 5 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ASP_MVC\Dojodachi\Views\Home\Index.cshtml"
                                 Write(Model.Fullness);

#line default
#line hidden
            EndContext();
            BeginContext(234, 46, true);
            WriteLiteral("</li>\r\n            <li class=\"mr-5\">Happiness ");
            EndContext();
            BeginContext(281, 15, false);
#line 6 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ASP_MVC\Dojodachi\Views\Home\Index.cshtml"
                                  Write(Model.Happiness);

#line default
#line hidden
            EndContext();
            BeginContext(296, 42, true);
            WriteLiteral("</li>\r\n            <li class=\"mr-5\">Meals ");
            EndContext();
            BeginContext(339, 10, false);
#line 7 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ASP_MVC\Dojodachi\Views\Home\Index.cshtml"
                              Write(Model.Meal);

#line default
#line hidden
            EndContext();
            BeginContext(349, 43, true);
            WriteLiteral("</li>\r\n            <li class=\"mr-5\">Energy ");
            EndContext();
            BeginContext(393, 12, false);
#line 8 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ASP_MVC\Dojodachi\Views\Home\Index.cshtml"
                               Write(Model.Energy);

#line default
#line hidden
            EndContext();
            BeginContext(405, 91, true);
            WriteLiteral("</li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"container col-12 d-center p-2\">\r\n        ");
            EndContext();
            BeginContext(496, 95, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "1c4d5df09cf94dcaa767ab9ef7b9bb65", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(591, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 13 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ASP_MVC\Dojodachi\Views\Home\Index.cshtml"
          
            string restart = "";
            if(@Model.Happiness==100 && @Model.Fullness == 100 && @Model.Energy == 100)
            {
                restart = "Congratulations! You won";

#line default
#line hidden
            BeginContext(798, 20, true);
            WriteLiteral("                <h3>");
            EndContext();
            BeginContext(819, 7, false);
#line 18 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ASP_MVC\Dojodachi\Views\Home\Index.cshtml"
               Write(restart);

#line default
#line hidden
            EndContext();
            BeginContext(826, 7, true);
            WriteLiteral("</h3>\r\n");
            EndContext();
#line 19 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ASP_MVC\Dojodachi\Views\Home\Index.cshtml"
            }
            if(@Model.Happiness==0 || @Model.Fullness == 0 )
            {
                restart = "Your Dojodachi has passed away";

#line default
#line hidden
            BeginContext(986, 20, true);
            WriteLiteral("                <h3>");
            EndContext();
            BeginContext(1007, 7, false);
#line 23 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ASP_MVC\Dojodachi\Views\Home\Index.cshtml"
               Write(restart);

#line default
#line hidden
            EndContext();
            BeginContext(1014, 7, true);
            WriteLiteral("</h3>\r\n");
            EndContext();
#line 24 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ASP_MVC\Dojodachi\Views\Home\Index.cshtml"
            }
            if(restart == "")
            {
                if(@Model.Action == "start")
                {

#line default
#line hidden
            BeginContext(1147, 41, true);
            WriteLiteral("                    <h3>Start Game</h3>\r\n");
            EndContext();
#line 30 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ASP_MVC\Dojodachi\Views\Home\Index.cshtml"
                }
                if(@Model.Action == "sleep")
                {

#line default
#line hidden
            BeginContext(1272, 49, true);
            WriteLiteral("                    <h3>Dojodachi is sleep</h3>\r\n");
            EndContext();
#line 34 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ASP_MVC\Dojodachi\Views\Home\Index.cshtml"
                }
                if(@Model.Action == "dislike")
                {

#line default
#line hidden
            BeginContext(1407, 59, true);
            WriteLiteral("                    <h3>Dojodachi does not like that</h3>\r\n");
            EndContext();
#line 38 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ASP_MVC\Dojodachi\Views\Home\Index.cshtml"
                }
                if(@Model.Action == "played")
                {

#line default
#line hidden
            BeginContext(1551, 61, true);
            WriteLiteral("                    <h3>You played with your Dojodachi</h3>\r\n");
            EndContext();
#line 42 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ASP_MVC\Dojodachi\Views\Home\Index.cshtml"
                }
                if(@Model.Action == "fed" || @Model.Action == "worked")
                {

#line default
#line hidden
            BeginContext(1723, 28, true);
            WriteLiteral("                    <h3>You ");
            EndContext();
            BeginContext(1752, 12, false);
#line 45 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ASP_MVC\Dojodachi\Views\Home\Index.cshtml"
                       Write(Model.Action);

#line default
#line hidden
            EndContext();
            BeginContext(1764, 22, true);
            WriteLiteral(" your Dojodachi</h3>\r\n");
            EndContext();
#line 46 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ASP_MVC\Dojodachi\Views\Home\Index.cshtml"
                }
                if(@Model.Action == "meal to eat" || @Model.Action == "energy")
                {

#line default
#line hidden
            BeginContext(1905, 46, true);
            WriteLiteral("                    <h3>Your Dojodachi has no ");
            EndContext();
            BeginContext(1952, 12, false);
#line 49 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ASP_MVC\Dojodachi\Views\Home\Index.cshtml"
                                         Write(Model.Action);

#line default
#line hidden
            EndContext();
            BeginContext(1964, 7, true);
            WriteLiteral("</h3>\r\n");
            EndContext();
#line 50 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ASP_MVC\Dojodachi\Views\Home\Index.cshtml"
                }
            }
        

#line default
#line hidden
            BeginContext(2016, 74, true);
            WriteLiteral("    </div>\r\n    <div class=\"d-flex justify-content-center bg-secondary\">\r\n");
            EndContext();
#line 55 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ASP_MVC\Dojodachi\Views\Home\Index.cshtml"
          
            if( (@Model.Happiness==0 || @Model.Fullness == 0 || @Model.Happiness==100) || (@Model.Fullness == 100 && @Model.Energy == 100 )) 
            {

#line default
#line hidden
            BeginContext(2260, 84, true);
            WriteLiteral("                <a href=\"dojodachi/reset\" class=\"btn btn-primary m-3\">Restart?</a>\r\n");
            EndContext();
#line 59 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ASP_MVC\Dojodachi\Views\Home\Index.cshtml"
            }
            else
            {

#line default
#line hidden
            BeginContext(2392, 318, true);
            WriteLiteral(@"                <a href=""dojodachi/feed"" class=""btn btn-primary m-3"">Feed</a>
                <a href=""dojodachi/play"" class=""btn btn-primary m-3"">Play</a>
                <a href=""dojodachi/work"" class=""btn btn-primary m-3"">Work</a>
                <a href=""dojodachi/sleep"" class=""btn btn-primary m-3"">Sleep</a>
");
            EndContext();
#line 66 "C:\Users\olaku\OneDrive\Documents\CODING_DOJO\CSharp\ASP_MVC\Dojodachi\Views\Home\Index.cshtml"
            }
        

#line default
#line hidden
            BeginContext(2736, 18, true);
            WriteLiteral("    </div>\r\n</div>");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Dojodachi.Models.MyModel> Html { get; private set; }
    }
}
#pragma warning restore 1591
