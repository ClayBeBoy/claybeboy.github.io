function ConversionPart1() {

    var UnsignedInt = parseInt(document.getElementById("1_UnsignedInt").value);
    var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);
    var BaseTenNum = 0;
    var DummyBaseTenNum = 0;
    var NewNum = "";

    console.log(String(UnsignedInt).length);



    for (i = 0; i < String(UnsignedInt).length; i++)
    {
      console.log((String(UnsignedInt).charAt(i)));
      BaseTenNum = BaseTenNum * UnsignedIntBaseFrom;
      BaseTenNum += parseInt((String)(UnsignedInt).charAt(i));
    }
    //BaseTenNum += (String(UnsignedInt).charAt(String(UnsignedInt).length));
    DummyBaseTenNum = BaseTenNum;

    while (BaseTenNum > 0)
    {
      NewNum = String(BaseTenNum % UnsignedIntBaseTo) + NewNum;
      BaseTenNum = parseInt(BaseTenNum / UnsignedIntBaseTo);
    }


    console.log(NewNum);

  var outputValue = NewNum;

  // Show the output on the screen
  FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, outputValue], 1);

}
