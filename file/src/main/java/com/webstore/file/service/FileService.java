package com.webstore.file.service;

import com.webstore.file.model.FileDB;
import com.webstore.file.repo.FileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
public class FileService {

    @Autowired
    private FileRepo repo;

    public FileDB storeFile(MultipartFile file) throws IOException {
        String fileName = file.getOriginalFilename();
        FileDB fileEntity = FileDB.builder()
                .name(fileName)
                .type(file.getContentType())
                .data(file.getBytes()).build();
        return repo.save(fileEntity);
    }

    public FileDB getFile(String uuid){
        Optional<FileDB> optional = repo.findById(uuid);
        if(optional.isPresent())
            return optional.get();
        return FileDB.builder().build();
    }

}
