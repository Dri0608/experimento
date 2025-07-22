PennController.ResetPrefix(null);
PennController.DebugOff();

Sequence("Participante", "Experimento", "Final");

Header(
  defaultText
    .css("font-size","1.2em")
    .print()
  ,
  defaultTextInput
    .css("font-size","1.2em")
    .print()
  ,
  defaultButton
    .css("font-size","1.2em")
    .print()
    .center()
    .wait()
);

newTrial("Participante", 
    newText("<p>Bem-vindo!</p>").center().print()
    ,
    newText("<p>Informe o seu nome:</p>").center().print()
    ,
    newTextInput("Nome").center()
    ,
    newButton("Iniciar").center()
    ,
    newVar("NOME")
      .global()
      .set(getTextInput("Nome"))
)
.log("NOME", getVar("NOME"));

Template("tabela.csv", row =>
  newTrial("Experimento",
    
    newButton("Iniciar vídeo").center().print().wait()
    ,

    newVideo("Video", row.Video)
      .size(360,360)
      .center()
      .print()
      .play()
      .wait()
    ,

    newText("A", row.julgamentoN),
    newText("B", row.julgamentoE),

    newCanvas("escolha", "800px", "200px")
      .add("center at 25%", "middle at 50%", getText("A"))
      .add("center at 75%", "middle at 50%", getText("B"))
      .center()
      .print()
    ,

    newSelector()
      .add(getText("A"), getText("B"))
      .log()
      .wait()

  )
  .log("Video", row.Video)
  .log("NOME", getVar("NOME"))
);

newTrial("Final",
  newText("Obrigada pela participação!")
    .center()
    .print()
    .wait()
);

setOption("countsForProgressBar", false);
