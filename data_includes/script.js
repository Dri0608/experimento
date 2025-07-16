PennController.ResetPrefix(null);
PennController.DebugOff

Sequence("Participante", "Experimento", "Final");

Header(

  defaultText
    .css("font-size","1.2en")
    .print()
  ,

defaultTextInput
    .css("font-size","1.2en")
    .print()
  ,

defaultButton
    .css("font-size","1.2en")
    .print()
    .center()
    .wait()

)

newTrial("Participante", 

        newText("<p>Bem-vindo!</p>")
        ,
        newText("<p>Informe o seu nome:<p>")
        ,
        newTextInput("Nome")
        ,
        newButton("Iniciar")
        ,
        newVar("NOME")
        .global()
        .set(getTextInput("Nome"))
)

.log("NOME", getVar("NOME"))

Template("tabela.csv",  row=>
                      newTrial("Experimento",
                               
                      newVideo("Video", row.Video)
                         .size(240,240)
                         .center()
                         .print()
                         .play()
                         .wait()
                      ,

                      newText("A", row.julgamentoN)
                      ,
                      newText("B", row.julgamentoE)
                      ,

                      newCanvas("2000wn", "800vh")
                         .add("center at 25%", "middle at 2%", getText("julgamentoN"))
                         .add("center at 75%", "middle at2%", getText("julgamentoE"))
                         .print()
                        ,

                     newSelector()
                        .add(getText("julgamentoN"), getText("julgamentoE"))
                        .keys("julgamentoN", "julgamentoE")
                        .log()
                        .wait()
                        ,

                     newButton("Próximo")
                      .log()
                      .remove()
                      ,
)
                               
.log("Áudio", row.Audio)
.log("Vídeo", row.Video)
.log("NOME", getVar("NOME"))

);

newtrial("Final",

newtext("Obrigada pela participação!")
  .wait()

)

setOption("countsForProgressBar", false);
