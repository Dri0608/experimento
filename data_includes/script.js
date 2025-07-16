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

.log("NOME", getvar("NOME"))

Template("tabela.csv",  row=>
                      newTrial("Experimento",

                      newAudio("Audio", row.Audio)
                         .play()
                      ,

                      newVideo("Video", row.Video)
                         .size(90,90)
                         .play()
                         .print()
                      ,

                      newButton("Próximo")
                      .log()
                      .remove()
                      ,

                      newText("A", row.julgamentoN)
                      ,
                      newText("B", row.julgamentoE)
                      ,

                      newCanvas("2000wn", "800vh")
                         .add("center at 25%", "middle at 2%", getText("julgamentoN"))
                         .add("center at 75%, "middle at2%", getText("julgamentoE")
                         .print()
                        ,

                     newselector()
                        .add(getText("julgamentoN"), getText("julgamentoE")
                        .keys("julgamentoN", "julgamentoE")
                        .log()
                        .wait()
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
