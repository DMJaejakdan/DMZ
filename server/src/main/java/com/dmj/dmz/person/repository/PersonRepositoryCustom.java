package com.dmj.dmz.person.repository;

import com.dmj.dmz.person.entity.dto.response.PersonResponse;
import com.dmj.dmz.person.entity.dto.request.PersonSearchConditions;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface PersonRepositoryCustom {
    Page<PersonResponse> personFindWithSearchConditions(Pageable pageable, final PersonSearchConditions personSearchConditions);
}
