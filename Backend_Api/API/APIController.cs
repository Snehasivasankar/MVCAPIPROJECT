using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MVCAPIPROJECT.API
{
    public class APIController : ApiController
    {
        Employee1Entities dbobj = new Employee1Entities();
        // GET: api/API
        [HttpGet]
        [Route("api/API/getwebapitabs")]
        public IHttpActionResult GetwebApiTabs()
        {
            return Json(dbobj.WebApiTabs.ToList());

        }

        // GET: api/API/5
        [HttpGet]
        [Route("api/API/getwebapitab/{id}")]
        public IHttpActionResult Get(int id)
        {
            WebApiTab employee = dbobj.WebApiTabs.Find(id);
            if (employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }

        // POST: api/API
        [HttpPost]
        [Route("api/API/postwebapitab")]
        public IHttpActionResult Post(WebApiTab webApiTab)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            dbobj.WebApiTabs.Add(webApiTab);
            dbobj.SaveChanges();
            return Ok(200);
        }

        // PUT: api/API/5
        [HttpPut]
        [Route("api/API/putwebapitab/{id}")]
        public IHttpActionResult Put(int id, WebApiTab webApiTab)
        {
            dbobj.Entry(webApiTab).State = EntityState.Modified;

            dbobj.SaveChanges();
            return Ok(200);

        }

        // DELETE: api/API/5
        [HttpDelete]
        [Route("api/API/deletewebapitab/{id}")]
        public IHttpActionResult Delete(int id)
        {
            WebApiTab webApiTab = dbobj.WebApiTabs.Find(id);
            if (webApiTab == null)
            {
                return NotFound();
            }
            dbobj.WebApiTabs.Remove(webApiTab);
            dbobj.SaveChanges();
            return Ok(webApiTab);
        }
    }
}
