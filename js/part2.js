function ConversionPart2() {
    //
    var SignedDecimalInt = parseInt(document.getElementById("2_SignedInt").value);
    var Copy = SignedDecimalInt;

  //  NEED TO HAVE CONSATANT NUMBER OF DIGITS!!!!!

    var outputValue = "010110101000110110011101";
    var outputValueTwosComplement = "101001010111001001100011";
    var NewNum = "";
    var Saved = 0;

    if (Copy == 0)
    {
      NewNum = "00";
    }

    else if (Copy <0)
    {
      Saved = 1;
      Copy = -Copy;
      while (Copy > 0)
      {
        NewNum = String(Copy % 2) + NewNum;
        Copy = parseInt(Copy / 2);

      }
      while (String(NewNum).length != 24)
      {
        NewNum = "0" + NewNum;
      }
    }

    else
    {
      Saved = 0;
      while (Copy > 0)
      {
        NewNum = String(Copy % 2) + NewNum;
        Copy = parseInt(Copy / 2);
      }
      while (String(NewNum).length != 24)
      {
        NewNum = "0" + NewNum;
      }
    }

     outputValue = NewNum;
     var FinalCopy = String(NewNum);

     console.log(String(FinalCopy).length);

     var Poop = "poop";

     console.log(Poop.substring(2));

    for ( i=0; i < String(FinalCopy).length; i++)
    {
       if (FinalCopy.charAt(i) == "0")
       {
         FinalCopy = FinalCopy.substring(0,i) + 6 + FinalCopy.substring(i+1);

       }
       if (FinalCopy.charAt(i) == "1")
       {
         FinalCopy = FinalCopy.substring(0,i) + 0 + FinalCopy.substring(i+1);

       }
       if (FinalCopy.charAt(i) == "6")
       {
         FinalCopy = FinalCopy.substring(0,i) + 1 + FinalCopy.substring(i+1);

       }
     }

     for ( i=String(FinalCopy).length-1; i > 0; i--)
     {
       if (FinalCopy.charAt(i)==0)
       {
         FinalCopy = FinalCopy.substring(0,i) + 1 + FinalCopy.substring(i+1);
         i=0;
       }
       else
       {
         FinalCopy = FinalCopy.substring(0,i) + 0 + FinalCopy.substring(i+1);
       }
     }


     if (Saved == 1)
     {
        outputValueTwosComplement = outputValue;
        outputValue = FinalCopy;
     }

     if (Saved == 0)
     {
     outputValueTwosComplement = FinalCopy;
   }
    // Show the output on the screen
    FormatAndShowOutput([outputValue, outputValueTwosComplement, SignedDecimalInt], 2);
}
