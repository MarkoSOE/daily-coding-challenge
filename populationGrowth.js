function nbYear(p0, percent, aug, p) {
    let inhabitants = p0;
    let counter = 0;
    while(p > inhabitants){
        inhabitants = inhabitants + Math.floor(inhabitants * percent/100) + aug;
        counter ++;
    }
    return counter;
  }