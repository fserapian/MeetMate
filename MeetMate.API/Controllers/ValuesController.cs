using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MeetMate.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace MeetMate.API.Controllers
{

    // http:localhost:5000/values
    [ApiController]
    [Route("[controller]")]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext context;

        public ValuesController(DataContext context) {
            this.context = context;
        }
        // GET /values
        [HttpGet]
        public async Task<IActionResult> GetValues()
        {
            var values = await context.Values.ToListAsync();

            return Ok(values);
        }

        // GET /values/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetValue(int id)
        {
            var value = await context.Values.FirstOrDefaultAsync(v => v.Id == id);

            return Ok(value);
        }

        // POST /values
        [HttpPost]
        public void Post([FromBody] string value)
        {

        }

        // PUT /values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {

        }

        // DELETE /values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }
    }
}