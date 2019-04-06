using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheWall.Models
{
    public class Message
    {
        [Key]
        public int MessageId {get; set;}

        [Required]
        [MinLength(2, ErrorMessage="Message must be atleast 10 characters long")]
        [Display(Name = "Post a Message")]
        public string Post {get; set;}
        public DateTime CreatedAt {get; set;} = DateTime.Now;
        public DateTime UpdatedAt {get; set;} = DateTime.Now;
        public int UserId {get; set;}
        public User Poster {get; set;}
        public List <Comment> Comments {get; set;}
    }

    public class Comment
    {
        [Key]
        public int CommentId {get; set;}

        [Required]
        [MinLength(2, ErrorMessage="Comment must be atleast 10 characters long")]
        [Display(Name = "Post a Comment")]
        public string Reply {get; set;}
        public DateTime CreatedAt {get; set;} = DateTime.Now;
        public DateTime UpdatedAt {get; set;} = DateTime.Now;
        public int UserId {get; set;}
        public User User {get; set;}
        public int MessageId {get; set;}
        public Message Message {get; set;}
    }

    public class AllMessages
    {
        public List<Message> allMessages {get; set;}
        public Message newMessage {get; set;}
        public Comment newComment {get; set;}
    }
}