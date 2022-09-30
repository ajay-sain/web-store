package com.webstore.file.controller;

import com.webstore.file.model.FileDB;
import com.webstore.file.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1")
public class FileController {

    @Autowired
    private FileService service;

    @PostMapping("/upload")
    public ResponseEntity<FileDB> uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
        return ResponseEntity.ok(service.storeFile(file));
    }

    @GetMapping("/{uuid}")
    public ResponseEntity<byte[]> uploadFile(@PathVariable(name = "uuid") String uuid){
        FileDB file= service.getFile(uuid);
        return ResponseEntity.ok()
//                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getName() + "\"")
                .header(HttpHeaders.CONTENT_TYPE, file.getType())
                .body(file.getData());
    }

}
