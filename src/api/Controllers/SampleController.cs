using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using api.Services;
using api.DTOs;

namespace api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SampleController : ControllerBase
{

    [HttpGet]
    public ActionResult Sample()
    {
        return Ok(new { Text = "Sample" });
    }

}
