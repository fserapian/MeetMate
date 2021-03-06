using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MeetMate.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
namespace MeetMate.API.Controllers
{

    // [Authorize]
    [ApiController]
    [Route("api/[Controller]")]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _context;

        public ValuesController(DataContext context)
        {
            _context = context;
        }
        // GET api/values
        [HttpGet]
        public async Task<IActionResult> GetValues()
        {
            var values = await _context.Values.ToListAsync();

            return Ok(values);
        }

        // GET api/values/3
        // [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetValue(int id)
        {
            var value = await _context.Values.FirstOrDefaultAsync(v => v.Id == id);

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