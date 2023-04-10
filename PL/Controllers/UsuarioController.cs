using Microsoft.AspNetCore.Mvc;

namespace PL.Controllers
{
    public class UsuarioController : Controller
    {
        public ActionResult GetAll()
        {
            return View();
        }
    }
}
