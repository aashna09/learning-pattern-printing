const diamond = function(n){
  var m = Math.ceil(n/2)
  var no_of_spaces_left = (n-m)*2
  var no_of_spaces_right = -1
  for(var i = 1; i <= n; i++){
    var line = ""
      for(var j = 0; j < no_of_spaces_left; j++){
        if(i==m && j%2==0 && i<n){
          line+="*"
        }
        else{
         line += " "
        }
      }
         line += "*"
    console.log(line)
    // Increase spaces to the left if i <= m
    if(i < m){
      no_of_spaces_left += 2
    }
    // Decrease spaces to the left if i > m
    else{
      no_of_spaces_left -= 2
    }
  }
 }
 diamond(9)