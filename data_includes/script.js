PennController.ResetPrefix(null);

Sequence("Participante", "Experimento", "Final");

Header(

  defaulText
    .css("font-size","1.2en")
    .print()
  ,

defaulTextInput
    .css("font-size","1.2en")
    .print()
  ,

defaulButton
    .css("font-size","1.2en")
    .print()
    .center()
    .wait()

)

newtrial("Participante", 

        newText("<p>Bem-vindo!</p>")
        ,
        newText("<p>Informe o seu nome:<p>")
        ,
        newTextInput("Nome")
        ,
        newbutton("Iniciar")
        ,
        newvar("NOME")
        .global()
        .ser(getTextInput("Nome"))
)

.log("NOME", getvar("NOME"))

Template("Tabela_script_auditivo.csv", 

        row=>newtrial("Experimento",

                      newAudio("Audio", row.Audio)
                         play()
                      ,

                      newVideo("Verbos.mp4")
                         .size(90,90)
                         .print()
                      ,

                      newbutton("Próximo")
                         .log()
                         .remove()
                      ,

                      getVideo("Verbos.mp4")
                         .remove()
                      ,

                      newbutton("Próximo")
                      .log()
                      .remove()
                      ,

                      newText("A", row.julgamentoN)
                      ,
                      newText("A", row.julgamentoE)
                      ,

                      newCanvas("2000wn", "800vh")
                         .add("center at 25%", "middle at 2%", getText("julgamentoN"))
                         .add("center at 75%, "middle at2%", getText("julgamentoE")
                         .print()

                     newselector()
                        .add(getText("julgamentoN"), getText("julgamentoE")
                        .keys("julgamentoN", "julgamentoE")
                        .log()
                        .wait()

)

newtrial("Final",

newtext("Obrigada pela participação!")
  .wait()

)

setOption("countsForProgressBar", false);
