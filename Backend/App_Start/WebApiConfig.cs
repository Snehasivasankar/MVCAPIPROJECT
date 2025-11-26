using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace MVCAPIPROJECT
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {


            // Enable CORS for Angular
            var cors = new EnableCorsAttribute("http://localhost:4200", "*", "*");
            config.EnableCors(cors);

            // Remove XML formatter → return JSON always
            config.Formatters.Remove(config.Formatters.XmlFormatter);

            // Do NOT set Newtonsoft Formatting
            // Your project is using default JSON formatter (System.Net.Http.Formatting)

            // Attribute routing
            config.MapHttpAttributeRoutes();

            // Default routing
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
        }
    }

