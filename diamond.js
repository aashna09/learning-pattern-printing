const diamond = function(n){
  var m = Math.ceil(n/2)
  var no_of_spaces_left = (n-m)*2
  var no_of_spaces_right = -1
  for(var i = 1; i <= n; i++){
    var line = ""
    // Let's print spaces to the left
    for(var j = 1; j <= no_of_spaces_left; j++){
      line += " "
    }
    // Adding star after spaces to the left
    line += "*"
    // Print double stars for all lines except 1st & last line
    if(i != 1 && i != n){
      // Increase if upper traingle
      if(i <= m){
        no_of_spaces_right += 4
      }
      // Decrease if lower traingle
      else{
        no_of_spaces_right -= 4
      }
      for(var j = 1; j <= no_of_spaces_right; j++){
        line += " "
      }
      line += "*"
    }
    console.log(line)
    // Decrease spaces to the left if i <= m
    if(i < m){
      no_of_spaces_left -= 2
    }
    // Increase spaces to the left if i > m
    else{
      no_of_spaces_left += 2
    }
  }
 }
  
 diamond(11)
 