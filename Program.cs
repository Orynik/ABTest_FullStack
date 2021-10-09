using ABTest_FullStack.Context;
using ABTest_FullStack.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ABTest_FullStack
{
    public class Program
    {
        public static void Main(string[] args)
        {
            /*
            using (UserContext db = new UserContext())
            {
                // создаем два объекта User
                User user1 = new User { DateLastActivity = DateTime.Parse("2011-03-21"), DateRegistration = DateTime.Parse("2011-01-11") };
                User user2 = new User { DateLastActivity = DateTime.Parse("2005-11-24"), DateRegistration = DateTime.Parse("2004-03-15") };

                // добавляем их в бд
                db.Users.AddRange(user1, user2);
                db.SaveChanges();
            }
            */
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
