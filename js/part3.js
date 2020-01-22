//THINGS I NEED TO FIX!!!
//  It crashes if you put in zero

function ConversionPart3() {
  var floatToConvert = parseFloat(document.getElementById("3_Float").value);
  var Integers;
  var Decimals;
  var IntegersTwo = "";
  var DecimalsTwo = "";
  var Sign = 0;
  var DumCounter;
  var TwoTotal;
  var Power;
  var FinalOutput;
  var HasDecimal = false;
  var PowerTwo = "";
  var PowerCopy;

  for (i = 0; i < String(floatToConvert).length; i++)
  {
    if (String(floatToConvert).charAt(i)==".")
    {
      Integers = String(floatToConvert).substring(0,i);
      Decimals = String(floatToConvert).substring(i+1);
      Decimals = Decimals / (Math.pow(10,String(Decimals).length));
      HasDecimal = true;
    }
  }

  if (HasDecimal == false)
  {
    Integers = String(floatToConvert);
    Decimals = 0;
  }


  console.log(Integers + " and " + Decimals);
  Integers = parseInt(Integers);

  if (Integers == 0)
  {
     IntegersTwo = "0";
  }

  else if (Integers <0)
  {
    Sign = 1;
    Integers = -Integers;
    while (Integers > 0)
    {
      IntegersTwo = String(Integers % 2) + IntegersTwo;
      Integers = parseInt(Integers / 2);
    }
  }

  else if (Integers >0)
  {
    while (Integers > 0)
    {
      IntegersTwo = String(Integers % 2) + IntegersTwo;
      Integers = parseInt(Integers / 2);
    }
  }



  if (Decimals == 0)
  {
     DecimalsTwo = "";
  }
  else if (Decimals > 0)
  {
    while (Decimals % 1 !=0)
    {
      Decimals = Decimals * 2;
      DecimalsTwo = DecimalsTwo + parseInt(Decimals);
      if (Decimals > 1)
      {
        Decimals = Decimals % 1;
      }
    }
  }
  console.log("Integer base two is: " + IntegersTwo + " and decimal is: " + DecimalsTwo);
/*
  //determine power
  if (IntegersTwo > 0)
  {
    Power = String(IntegersTwo).length - 1;
  }
  else
  {
    Power = -1;
    for (i = 0; i<String(DecimalsTwo).length; i++)
    {
      if (String(DecimalsTwo).charAt(i)>0)
      {
        i = String(DecimalsTwo).length;
      }
      Power--;
    }
  }

  TwoTotal = String(IntegersTwo) + "" + String(DecimalsTwo);
  TwoTotal = TwoTotal.substring(1,23);

  while (TwoTotal.length<23)
  {
    TwoTotal = TwoTotal + "0";
  }
  */

  Power = String(IntegersTwo).length - 1;
  TwoTotal = String(IntegersTwo) + "" + String(DecimalsTwo);
  while (String(TwoTotal).charAt(0) != 1)
  {
    TwoTotal = TwoTotal.substring(1);
    Power--;
  }
  TwoTotal = TwoTotal.substring(1);
  while(TwoTotal.length < 23)
  {
    TwoTotal = TwoTotal + "0";
  }

  //converting power to the right notation
  PowerCopy = Power;
  Power = 128 + Power;
  while (Power > 0)
  {
    PowerTwo = String(Power % 2) + PowerTwo;
    Power = parseInt(Power / 2);
  }

  while (PowerTwo.length < 8)
  {
    PowerTwo = "0" + PowerTwo;
  }

  console.log(TwoTotal + " with a power of " + PowerCopy);
  console.log("The power base two is: " + PowerTwo);

  FinalOutput = String(TwoTotal) + "" + String(PowerTwo) + String(Sign);
  /*
  output32BitScientificNotation = FinalOutput;

  if (floatToConvert = 3434000)
  {
    var output32BitScientificNotation = "10100011001100001000010100101010";
  }
  */

  // Show the output on the screen
  FormatAndShowOutput([floatToConvert, FinalOutput], 3);
}


// If you dare read a comment before starting to program..
// 3434000.5 has a binary representation of
//  1101000110011000010000.1
// In NORMALIZED scientific notation (i.e. scientific notation for Base 2)
// 1.1010001100110000100001 * 2^21
// ... so mantissa is 11010001100110000100001


// For the final 32 bits.. we have
// ... so 1010001100110000100001 for mantissa (because of explicit leading 1)
// ... so for bits (0-22) 10100011001100001000010
// ... so exponent representation in +128 format is 21+128 = 149 = (bits 23-30) 10010101
// ... so final sign bit = (bit 31) 0
