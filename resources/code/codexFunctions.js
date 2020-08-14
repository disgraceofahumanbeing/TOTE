function CreateCodex() {
  Element("content").textContent = "";
  Element("contentScroller").textContent = "";
  for(let cat of codex) {
    let catTitle = CreateText(cat.cat, "CodexCategories");
    let catArrow = CreateSpan("▶", "CodexArrows");
    catTitle.id = cat.cat + "Title";
    catArrow.id = cat.cat + "Button";
    catArrow.addEventListener("click", ()=>openSubCategories(cat.subcats, catArrow.id, catTitle.id));
    catTitle.appendChild(catArrow);
    Element("contentScroller").appendChild(catTitle);
  }
}

function openSubCategories(subcats, id, parent) {
  if(Element(id).textContent == "▶") {
    Element(id).textContent = "▼";
    let base = Create('div');
    base.id = id + "Base";
    Element(parent).appendChild(base);
    for(let subcat of subcats) {
      let catSubtitle = CreateText(subcat.subcat, "CodexSubcategories")
      let catSubarrow = CreateSpan("▶", "CodexArrowsSmall");
      catSubtitle.id = subcat.subcat + "Title";
      catSubarrow.id = subcat.subcat + "Button";
      catSubarrow.addEventListener("click", ()=>openEntityList(subcat.content, catSubarrow.id, catSubtitle.id));
      catSubtitle.appendChild(catSubarrow);
      Element(base.id).appendChild(catSubtitle);
    }
  } 
  else if(Element(id).textContent == "▼") {
    Element(id).textContent = "▶";
    Element(id + "Base").remove();
  }  
}

function openEntityList(content, id, parent) {
  if(Element(id).textContent == "▶") {
    Element(id).textContent = "▼";
    let base = Create('div');
    base.id = id + "Base";
    Element(parent).appendChild(base);
    for(let entity of content) {
      let catEntity = CreateText(entity.key, "CodexEntities")
      catEntity.id = entity.key + "Entity";
      catEntity.style.textDecoration = "none";
      catEntity.addEventListener("click", ()=>FormCodexEntity(entity.key, entity.content, entity.tags));
      Element(base.id).appendChild(catEntity);
    }
  } 
  else if(Element(id).textContent == "▼") {
    Element(id).textContent = "▶";
    Element(id + "Base").remove();
  }  
}

function FormCodexEntity(key, content, tags) {
  Element("content").textContent = "";
  Element("content").appendChild(CreateText(key, "CodexEntryTitle"));
  Element("content").appendChild(ReadContent(content));
  let tagsText = "Tags: ";
  for(let tag of tags) {
    tagsText += tag.tag + ", ";
  }
  tagsText = tagsText.substring(0, tagsText.length-2);
  Element("content").appendChild(CreateText(tagsText, "CodexEntities"));
}

function ReadContent(text) {
  let content = text.split("§");
  let textContent = Create('div');
  textContent.id = "CodexBaseText";
  for(let colors of content) {
    let img;
    let link;
    let color;
    let text;
    if(colors.indexOf("%") != -1) {
      img = colors.split("%")[1];
      text = colors.split("%")[2];
    }
    else if(colors.indexOf("/") != -1) {
      color = colors.split("/")[1];
      text = colors.split("/")[2];
    } if(colors.indexOf("&") != -1) {
      link = colors.split("&")[1];
      text = colors.split("&")[2];
    } else if(text == undefined) text = colors;
    if(text == ":break") textContent.innerHTML += "<br>";
    else if(img != undefined && link == undefined) textContent.innerHTML += `<img style="width: 30px height: 30px" src="resources/images/icons/${img}.png">`;
    else if(img != undefined && link != undefined) textContent.innerHTML += `<img style="width: 30px height: 30px" class="PointerClass" src="resources/images/icons/${img}.png" onclick="${link}">`;
    else if(link != undefined) textContent.innerHTML += `<span style = "color: ${color || "white"}" class="PointerClass" onclick="${link}">${text}</span>`;
    else if(text) textContent.innerHTML += `<span style = "color: ${color || "white"}">${text}</span>`;
  }
  return textContent;
}

CreateCodex();