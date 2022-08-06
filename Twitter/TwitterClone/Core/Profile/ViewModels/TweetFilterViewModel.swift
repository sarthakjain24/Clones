//
//  TweetFilterViewModel.swift
//  TwitterClone
//
//  Created by SARTHAK JAIN on 8/3/22.
//

import Foundation

enum TweetFilterViewModel: Int, CaseIterable{
    case tweets
    case replies
    case likes
    
    var Title: String{
        switch self{
        case .tweets: return "Tweets"
        case .replies: return "Replies"
        case .likes: return "Likes"
        }
    }
}
