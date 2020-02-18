using System.ComponentModel.DataAnnotations;

namespace MeetMate.API.DTOs
{
    public class UserForRegister
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(20, MinimumLength = 6, ErrorMessage = "Password must be between 6 and 20 characters")]
        public string Password { get; set; }
    }
}