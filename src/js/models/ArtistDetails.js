import ArtistLinkDetail from "./ArtistLinkDetail.js"

var ArtistDetails = function() {
  this.facebook = new ArtistLinkDetail("Matt Peet Illustration", "https://www.facebook.com/pages/category/Artist/Matt-Peet-Illustration-2131152087124697/" )
  this.instagram = new ArtistLinkDetail("@m_r_peet", "http://instagram.com/m_r_peet")
  this.tumblr = new ArtistLinkDetail("m-r-peet", "http://m-r-peet.tumblr.com/")
  this.twitter = new ArtistLinkDetail("@m_r_peet", "http://twitter.com/m_r_peet")
  this.email = new ArtistLinkDetail("matt@mattpeetillustration.com", "matt@mattpeetillustration.com")

  this.about = "Matt Peet is a freelance illustrator based in Edinburgh."
}

export default ArtistDetails