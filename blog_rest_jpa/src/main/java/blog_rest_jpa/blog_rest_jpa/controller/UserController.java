package blog_rest_jpa.blog_rest_jpa.controller;
import blog_rest_jpa.blog_rest_jpa.dto.UserDto;
import blog_rest_jpa.blog_rest_jpa.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class UserController {
  @Autowired private UserService userService;
  @CrossOrigin(origins = "*")
  @PostMapping("/api/user")
  public UserDto newUser(@RequestBody UserDto userDto) {
    return userService.addUser(userDto);
  }
  @CrossOrigin(origins = "*")
  @GetMapping("/api/user")
  public List<UserDto> userList() {

    return userService.usersList();
  }
  @CrossOrigin(origins = "*")
  @GetMapping("api/user/{id}")
  public UserDto getUser(@PathVariable("id") Long id) {
    return userService.getUser(id);
  }

  @CrossOrigin(origins = "*")
  @DeleteMapping("api/user/{id}")
  public String deleteUser(@PathVariable("id") Long id) {
    return userService.deleteUser(id);
  }

  @CrossOrigin(origins = "*")
  @PutMapping("/api/user/{id}")
  public UserDto updatePost(@RequestBody UserDto userDto) {
    return userService.updatePost(userDto);
  }
}
