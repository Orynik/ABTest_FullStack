using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using ABTest_FullStack.Models;
using ABTest_FullStack.Context;
using Microsoft.EntityFrameworkCore;

namespace ABTest_FullStack.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TableController : Controller
    {

        private UserContext db;

        public TableController(UserContext context)
        {
            db = context;
        }
        [HttpGet("")]
        public async Task<IActionResult> Index()
        {
            return Ok(await db.Users.ToListAsync());
        }

        [HttpPost]
        public async Task<IActionResult> Create(User user)
        {
            db.Users.Add(user);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }
    }
}
